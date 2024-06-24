import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index') // render handlebars template/views
  index() {
    return {
      title: "Home"
    }
  }

  @Get('/about')
  @Render('about')
  about(){
    let viewData = []
    viewData["description"] = "This app is a project demo for server side rendering"
    viewData["author"] = "Developed by: Juma Anton"
    const title = "About"
    return {
      title: title,
      subtitle: "About us",
      viewData: viewData
    }
  } 
}
