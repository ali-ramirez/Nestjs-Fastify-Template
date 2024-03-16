import { Module } from '@nestjs/common';
import { HealthModule } from './core/health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
