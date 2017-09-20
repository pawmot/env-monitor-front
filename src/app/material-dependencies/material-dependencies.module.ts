import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdCoreModule, MdGridListModule, MdIconModule, MdListModule,
  MdProgressBarModule, StyleModule
} from '@angular/material';
import {ObserversModule} from '@angular/cdk/observers';
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
  imports: [MdCardModule, MdListModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdGridListModule, ObserversModule, PlatformModule, StyleModule],
  exports: [MdCardModule, MdListModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdGridListModule, ObserversModule, PlatformModule, StyleModule]
})
export class MaterialDependenciesModule {
}
