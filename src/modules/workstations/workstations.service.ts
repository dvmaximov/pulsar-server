import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { initResult, ApiResult } from 'src/shared/models/api.interface';
import { StationType } from 'src/shared/models/socket.interface';
import {
  Workstation,
  Workstations,
} from 'src/shared/models/workstation.interface';
import { SocketService } from '../api/socket.service';

@Injectable()
export class WorkstationsService {
  private workstations: Workstations = [];

  constructor(
    @Inject(forwardRef(() => SocketService))
    private readonly socketService: SocketService,
  ) {}

  getWorkstations(): ApiResult {
    return { ...initResult, result: this.workstations };
  }

  createWorkstation(
    name: string,
    socketId: string,
    stationType: StationType,
  ): Workstation {
    const newWorkstation: Workstation = {
      name,
      stationType,
      socketId,
    };
    this.workstations.push(newWorkstation);
    return newWorkstation;
  }

  removeWorkstation(socketId: string): Workstation | null {
    const newWorkstations = this.workstations.filter(
      (station) => station.socketId !== socketId,
    );
    const removeWorkstation = this.workstations.find(
      (station) => station.socketId === socketId,
    );
    this.workstations = newWorkstations;
    return removeWorkstation;
  }
}
