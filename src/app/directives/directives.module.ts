import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  declarations: [StructuralDirectivesComponent, ButtonComponent, CardComponent, AttributeDirectivesComponent, HightlightDirective],
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent, AttributeDirectivesComponent]
})
export class DirectivesModule {}
