import { Component } from '@angular/core';
import { PoPageDynamicTableActions } from 'projects/templates/src/lib';
import { PoBreadcrumb } from '@po-ui/ng-components/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Cliente', link: '/cliente' },
    { label: 'Teste', link: '/teste' },
    { label: 'Calculadora', link: '/calculadora' },
    { label: 'Resultados', link: '/resultados' }
  ];
}
