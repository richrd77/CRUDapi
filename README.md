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
2. now Inject `HttpClient` in the service (in this case `Main.Service.ts`)
