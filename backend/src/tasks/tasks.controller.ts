import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(@GetUser() user: any) {
    return this.tasksService.findAll(user.userId);
  }

  @Post()
  create(@GetUser() user: any, @Body() dto: CreateTaskDto) {
    return this.tasksService.create(user.userId, dto);
  }

  @Patch(':id')
  update(
    @GetUser() user: any,
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.tasksService.update(user.userId, Number(id), dto);
  }

  @Patch(':id/toggle')
  toggle(@GetUser() user: any, @Param('id') id: string) {
    return this.tasksService.toggleCompleted(user.userId, Number(id));
  }

  @Delete(':id')
  remove(@GetUser() user: any, @Param('id') id: string) {
    return this.tasksService.remove(user.userId, Number(id));
  }
}
