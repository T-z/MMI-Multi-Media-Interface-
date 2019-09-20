import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HmiComponent} from './hmi.component';
import {FisComponent} from './fis/fis.component';
import {ElaComponent} from './ela/ela.component';
import {TalkComponent} from './talk/talk.component';
import {VideoComponent} from './video/video.component';
import {DrivingMirrorComponent} from './driving-mirror/driving-mirror.component';
import {ElaSettingComponent} from './ela-setting/ela-setting.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {RblComponent} from './rbl/rbl.component';
import {RoutesComponent} from './routes/routes.component';

const HmiRoutes: Routes = [{
  path: '',
  component: HmiComponent,
  canActivate: [],
  children: [{
    path: 'fis',
    component: FisComponent
  }, {
    path: 'ela',
    component: ElaComponent
  }, {
    path: 'talk',
    component: TalkComponent
  }, {
    path: 'video',
    component: VideoComponent
  }, {
    path: 'mirror',
    component: DrivingMirrorComponent
  }, {
    path: 'ela/setting',
    component: ElaSettingComponent
  }, {
    path: 'announcement',
    component: AnnouncementComponent
  }, {
    path: 'rbl/announcement',
    component: RblComponent
  },{
    path: 'routes',
    component: RoutesComponent
  }, {
    path: '',
    redirectTo: 'fis',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(HmiRoutes)],
  exports: [RouterModule]
})
export class HmiRoutingModule {
}
