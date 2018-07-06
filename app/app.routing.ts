import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {Routes} from '@angular/router';

import {BoardComponent} from './components/board/board.component';
import {GameResultComponent} from './components/gameresult/gameresult.component';

const routes: Routes = [
    {path: '', redirectTo: '/board', pathMatch: 'full'},
    {path: 'board', component: BoardComponent},
    {path: 'gameresult/:id', component: GameResultComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}