import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import * as Express from 'express';
export class JobApplicationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'John Doe',
  })
  applicant_name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'johndoe@example.com',
  })
  email: string;

  @IsOptional()
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  resume?: any;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Software Engineer who has worked with Node.js, React, and Angular',
  })
  cover_letter: string;
}
