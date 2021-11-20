# CRUDapi

This project demonstrates a simple GET/POST/PUT/DELETE Operation(s) by calling a fake api.

## Get Operation

1. import HttpClientModule from `@angular/common/http` in the Main Module or Sub Module 
`import { HttpClientModule } from '@angular/common/http'` at the top and add `HttpClientModule` in the Imports section of the module as shown below.
`imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]`
2. now Inject `HttpClient` in the service (in this case [Main.Service.ts](https://github.com/richrd77/CRUDapi/blob/master/src/app/main.service.ts)) and perform GET operation and return Observable of Object (in this case refer `PerformGet` function).

3. now call `Main.service.ts`'s `PerformGet` function and subscribe to the observable, refer below code
`public comments: Comment[];
constructor(public mService: MainService) { }
ngOnInit(): void {
    this.mService.PerformGet().subscribe(c => this.comments = c);
}`

4. display data, now iterate `comments` array using `ngFor` loop
