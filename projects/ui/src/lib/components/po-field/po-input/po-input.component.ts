import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PoCustomAreaService } from '../../po-custom-area/services/po-custom-area.service';

import { PoInputGeneric } from '../po-input-generic/po-input-generic';

/**
 * @docsExtends PoInputBaseComponent
 *
 * @example
 *
 * <example name="po-input-basic" title="PO Input Basic">
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.html"> </file>
 *  <file name="sample-po-input-basic/sample-po-input-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-labs" title="PO Input Labs">
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.html"> </file>
 *  <file name="sample-po-input-labs/sample-po-input-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-input-reactive-form" title="PO Input - Reactive Form">
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"> </file>
 *  <file name="sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"> </file>
 * </example>
 */
@Component({
  selector: 'po-input',
  templateUrl: './po-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PoInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PoInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoInputComponent extends PoInputGeneric {
  /* istanbul ignore next */
  constructor(el: ElementRef, private poCustomAreaService: PoCustomAreaService,, cd: ChangeDetectorRef) {
    super(el, cd);
  }

  getModel(value: any) {
    const model = {};
    const name = this.name ?? 'radio';

    model[name] = value;
    return model;
  }

  callOnChange(value: any) {
    super.callOnChange(value);
    this.poCustomAreaService.setModel(this.getModel(value));
    this.poCustomAreaService.notifyAll();
  }

  writeValue(value: any) {
    super.writeValue(value);
    this.poCustomAreaService.setModel(this.getModel(value));
    this.poCustomAreaService.notifyAll();
  }

  extraValidation(c: AbstractControl): { [key: string]: any } {
    return null;
  }
}
