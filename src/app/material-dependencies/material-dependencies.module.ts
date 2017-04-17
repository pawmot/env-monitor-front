import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdCoreModule, MdIconModule, MdListModule} from '@angular/material';

@NgModule({
  imports: [MdCoreModule, MdCardModule, MdListModule, MdButtonModule, MdIconModule],
  exports: [MdCoreModule, MdCardModule, MdListModule, MdButtonModule, MdIconModule]
})
export class MaterialDependenciesModule {
}
