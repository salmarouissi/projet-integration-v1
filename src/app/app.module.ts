import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './frontoffice/default/default.component';
import { MenuComponent } from './frontoffice/menu/menu.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { TechnologyComponent } from './frontoffice/technology/technology.component';
import { ManagementComponent } from './frontoffice/management/management.component';
import { TicmanagComponent } from './frontoffice/ticmanag/ticmanag.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { CreateComponent } from './frontoffice/create/create.component';
import { DashJuryComponent } from './backoffice/jury/dash-jury/dash-jury.component';
import { DashhomeComponent } from './backoffice/jury/dashhome/dashhome.component';
import { DashnoteComponent } from './backoffice/jury/dashnote/dashnote.component';
import { DashconsulterComponent } from './backoffice/jury/dashconsulter/dashconsulter.component';
import { DashetudiantComponent } from './backoffice/etudiant/dashetudiant/dashetudiant.component';
import { DashhomeetudComponent } from './backoffice/etudiant/dashhomeetud/dashhomeetud.component';
import { DashdepotComponent } from './backoffice/etudiant/dashdepot/dashdepot.component';
import { DashconsulteretudComponent } from './backoffice/etudiant/dashconsulteretud/dashconsulteretud.component';
import { DashdemandeComponent } from './backoffice/etudiant/dashdemande/dashdemande.component';
import { RapportComponent } from './backoffice/etudiant/rapport/rapport.component';
import { AttestationComponent } from './backoffice/etudiant/attestation/attestation.component';
import { DashadminComponent } from './backoffice/admin/dashadmin/dashadmin.component';
import { ListerEtudiantComponent } from './backoffice/admin/lister-etudiant/lister-etudiant.component';
import { DashhomeAdminComponent } from './backoffice/admin/dashhome-admin/dashhome-admin.component';
import { ListerJuryComponent } from './backoffice/admin/lister-jury/lister-jury.component';
import { ListerEntrepriseComponent } from './backoffice/admin/lister-entreprise/lister-entreprise.component';
import { DepotAffectationComponent } from './backoffice/admin/depot-affectation/depot-affectation.component';
import { AjoutEntrepriseComponent } from './backoffice/admin/ajout-entreprise/ajout-entreprise.component';
import { DetailEntrepriseComponent } from './backoffice/admin/detail-entreprise/detail-entreprise.component';
import { AjouterSoutenanceComponent } from './backoffice/admin/ajouter-soutenance/ajouter-soutenance.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    TechnologyComponent,
    ManagementComponent,
    TicmanagComponent,
    LoginComponent,
    CreateComponent,
    DashJuryComponent,
    DashhomeComponent,
    DashnoteComponent,
    DashconsulterComponent,
    DashetudiantComponent,
    DashhomeetudComponent,
    DashdepotComponent,
    DashconsulteretudComponent,
    DashdemandeComponent,
    RapportComponent,
    AttestationComponent,
    DashadminComponent,
    ListerEtudiantComponent,
    DashhomeAdminComponent,
    ListerJuryComponent,
    ListerEntrepriseComponent,
    DepotAffectationComponent,
    AjoutEntrepriseComponent,
    DetailEntrepriseComponent,
    AjouterSoutenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
