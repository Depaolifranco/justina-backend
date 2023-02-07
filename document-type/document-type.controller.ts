import { Controller, Get } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';

@Controller('document-type')
export class DocumentTypeController {
  constructor(private documentTypeService: DocumentTypeService) {}

  @Get()
  async documentTypes() {
    return this.documentTypeService.findAll();
  }
}
