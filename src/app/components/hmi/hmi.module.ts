import {NgModule, Pipe} from '@angular/core';
import {HmiRoutingModule} from './hmi-routing.module';
import {HmiComponent} from './hmi.component';
import {SoftkeybandComponent} from './components/softkeyband/softkeyband.component';
import {FisComponent} from './fis/fis.component';
import {ElaComponent} from './ela/ela.component';
import {StatusboxComponent} from './components/statusbox/statusbox.component';
import {MatIconModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { TalkComponent } from './talk/talk.component';
import { VideoComponent } from './video/video.component';
import { DrivingMirrorComponent } from './driving-mirror/driving-mirror.component';
import { StartDisplayComponent } from './components/start-display/start-display.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { ElaSettingComponent } from './ela-setting/ela-setting.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { RblComponent } from './rbl/rbl.component';
import { RoutesComponent } from './routes/routes.component';
import { SpeakerInsideComponent } from './components/speaker-inside/speaker-inside.component';
import { SpeakerOutsideComponent } from './components/speaker-outside/speaker-outside.component';


@NgModule({
  imports: [
    HmiRoutingModule,
    MatIconModule,
    CommonModule
  ],
  declarations: [HmiComponent, SoftkeybandComponent, FisComponent, ElaComponent, StatusboxComponent, VehicleComponent, TalkComponent, VideoComponent, DrivingMirrorComponent, StartDisplayComponent, ItineraryComponent, ElaSettingComponent, AnnouncementComponent, RblComponent, RoutesComponent, SpeakerInsideComponent, SpeakerOutsideComponent],
  providers: [],
  entryComponents: []
})
export class HmiModule {

}

