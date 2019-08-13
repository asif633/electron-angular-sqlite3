import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxPrintModule } from 'ngx-print';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { RouteInterceptorService } from './route.interceptor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzFormModule,
    NzTableModule,
    NzTabsModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzCheckboxModule,
    NzAffixModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzToolTipModule,
    NzMessageModule,
    NzPaginationModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzCollapseModule,
    NzCardModule,
    NzSkeletonModule,
    NzTagModule,
    NgxPrintModule,
    NzListModule,
    NzUploadModule,
    NgZorroAntdModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    NzFormModule,
    NzTableModule,
    NzTabsModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzCheckboxModule,
    NzPageHeaderModule,
    NzAffixModule,
    NzDropDownModule,
    NzToolTipModule,
    NzMessageModule,
    NzPaginationModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzCollapseModule,
    NzCardModule,
    NzSkeletonModule,
    NzTagModule,
    NgxPrintModule,
    NzListModule,
    NzUploadModule,
    NgZorroAntdModule
  ],
  providers: [RouteInterceptorService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RouteInterceptorService]
    }
  }
}
