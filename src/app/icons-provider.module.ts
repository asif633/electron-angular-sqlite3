import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  PrinterOutline,
  PrinterFill,
  SnippetsOutline,
  OrderedListOutline,
  EditTwoTone,
  ArrowLeftOutline,
  DeleteTwoTone
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, PrinterOutline, SnippetsOutline,
  OrderedListOutline, EditTwoTone, DeleteTwoTone, PrinterFill, ArrowLeftOutline
];

@NgModule({
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
