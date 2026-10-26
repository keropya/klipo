import { ArrayMaxSize, ArrayNotEmpty, IsArray, IsString } from 'class-validator';

export class DeleteMediaDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMaxSize(500)
  @IsString({ each: true })
  ids: string[];
}
