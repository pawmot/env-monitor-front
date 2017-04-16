import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdCoreModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [MdCoreModule, MdCardModule, MdButtonModule, MdIconModule],
  exports: [MdCoreModule, MdCardModule, MdButtonModule, MdIconModule],
})
export class MaterialDependenciesModule {
}
