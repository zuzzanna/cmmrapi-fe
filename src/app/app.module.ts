import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InfrastructureComponent} from './infrastructure/infrastructure.component';
import {PaginatorModule} from 'primeng/paginator';
import {ProfilComponent} from './profil/profil.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {NgxImageZoomModule } from 'ngx-image-zoom';
import {TabViewModule} from 'primeng/tabview';
import { LabsComponent } from './labs/labs.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { CernComponent } from './cern/cern.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InfrastructureComponent,
    ProfilComponent,
    LabsComponent,
    CernComponent,
    AboutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EditorModule,
    PaginatorModule,
    MegaMenuModule,
    MenubarModule,
    CarouselModule,
    SidebarModule,
    ButtonModule,
    GalleriaModule,
    CardModule,
    DataViewModule,
    InputTextModule,
    NgxImageZoomModule,
    TabViewModule,
    OrganizationChartModule,

  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
