import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index') // render handlebars template/views
  index() {}
  
}
