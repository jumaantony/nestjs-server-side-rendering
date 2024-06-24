import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index') // render handlebars template/views
  index() {
    let viewData = [];
    viewData['title'] = 'Home';
    return {
      viewData: viewData
    }
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = "About us";
    viewData['description'] = "NestJS Server Side Rendering";
    viewData['author'] = 'Developed by: Juma Anton';
    return {
      viewData: viewData,
    }
  }
}
