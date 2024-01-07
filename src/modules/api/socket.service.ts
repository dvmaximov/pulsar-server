/* eslint-disable prettier/prettier */
import { Server, Socket } from 'socket.io';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../shared/models/socket.interface';

import { Message } from '../../shared/models/socket.interface';
import { WorkstationsService } from '../workstations/workstations.service';
import { Inject, forwardRef } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketService implements OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server = new Server<
    ServerToClientEvents,
    ClientToServerEvents
  >();

  constructor(
    @Inject(forwardRef(() => WorkstationsService))
    private readonly workstationService: WorkstationsService,
  ) {}

  @SubscribeMessage('registration')
  async registration(client: Socket, data: Message): Promise<Message> {
    client.join(data.station.stationName);
    const answer = {
      worstation: this.workstationService.createWorkstation(
        data.station.stationName,
        client.id,
        data.station.stationType,
      ),
    };
    this.server.sockets
      .to(data.station.stationName)
      .emit('registration', answer);
    this.updateWorkstations();

    return data;
  }

  private updateWorkstations() {
    const stations = this.workstationService.getWorkstations().result;
    for (const station of stations) {
      this.emit(station.name, 'updateWorkstations');
    }    
  }

  @SubscribeMessage('getStationSettings')
  async getStationSettings(client: Socket, data: Message): Promise<Message> {
    this.emit(data.receiver.name, 'getStationSettings', data)
    return data;
  }

  @SubscribeMessage('updateStationSetting')
  async updateStationSetting(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'updateStationSetting', data)
  }

  @SubscribeMessage('stationSettings')
  async stationSettings(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationSettings', data)
    return data;
  }

  @SubscribeMessage('stationSettingUpdated')
  async stationSettingUpdated(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationSettingUpdated', data)
    return data;
  }

  // События для Tasks

  @SubscribeMessage('getStationTasks')
  async getStationTasks(client: Socket, data: Message): Promise<Message> {
    this.emit(data.receiver.name, 'getStationTasks', data)
    return data;
  }

  @SubscribeMessage('deleteStationTask')
  async deleteStationTask(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'deleteStationTask', data)
  }

  @SubscribeMessage('updateStationTask')
  async updateStationTask(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'updateStationTask', data)
  }

  @SubscribeMessage('moveStationTask')
  async moveStationTask(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'moveStationTask', data)
  }

  @SubscribeMessage('stationTasks')
  async stationTasks(client: Socket, data: Message) {
    this.emit(data.message['station'].stationName, 'stationTasks', data)
  }

  @SubscribeMessage('stationTaskDeleted')
  async stationTaskDeleted(client: Socket, data: Message) {
    this.emit(data.message['station'].stationName, 'stationTaskDeleted', data)
  }  

  @SubscribeMessage('stationTaskUpdated')
  async stationTaskUpdated(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationTaskUpdated', data)
    return data;
  }

  @SubscribeMessage('stationTaskMoved')
  async stationTaskMoved(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationTaskMoved', data)
    return data;
  }
  // -- События для Tasks

  // События для Works

  @SubscribeMessage('getStationWorks')
  async getStationWorks(client: Socket, data: Message): Promise<Message> {
    this.emit(data.receiver.name, 'getStationWorks', data)
    return data;
  }

  @SubscribeMessage('deleteStationWorks')
  async deleteStationWorks(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'deleteStationWorks', data)
  }

  @SubscribeMessage('createStationWorks')
  async createStationWorks(client: Socket, data: Message) {
    this.emit(data.receiver.name, 'createStationWorks', data)
  }

  @SubscribeMessage('stationWorks')
  async stationWorks(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationWorks', data)
    return data;
  }

  @SubscribeMessage('stationWorksDeleted')
  async stationWorksDeleted(client: Socket, data: Message): Promise<Message> {
    this.emit(data.message['station'].stationName, 'stationWorksDeleted', data)
    return data;
  }

  @SubscribeMessage('stationWorksCreated')
  async StationWorksCreated(client: Socket, data: Message) {
    this.emit(data.message['station'].stationName, 'StationWorksCreated', data)
  }
  // -- События для Works


  async handleDisconnect(socket: Socket): Promise<void> {
    this.workstationService.removeWorkstation(socket.id);
    this.updateWorkstations();
  }

  async emit(to: string, event: string, payload = {}): Promise<void> {
    this.server.sockets.to(to).emit(event, payload);
  }
}
