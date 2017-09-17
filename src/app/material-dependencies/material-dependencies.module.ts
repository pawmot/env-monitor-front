import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdCoreModule, MdGridListModule, MdIconModule, MdListModule,
  MdProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [MdCoreModule, MdCardModule, MdListModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdGridListModule],
  exports: [MdCoreModule, MdCardModule, MdListModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdGridListModule]
})
export class MaterialDependenciesModule {
}
