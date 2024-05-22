import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttestationComponent } from './backoffice/etudiant/attestation/attestation.component';
import { DashconsulteretudComponent } from './backoffice/etudiant/dashconsulteretud/dashconsulteretud.component';
import { DashdemandeComponent } from './backoffice/etudiant/dashdemande/dashdemande.component';
import { DashdepotComponent } from './backoffice/etudiant/dashdepot/dashdepot.component';
import { DashetudiantComponent } from './backoffice/etudiant/dashetudiant/dashetudiant.component';
import { DashhomeetudComponent } from './backoffice/etudiant/dashhomeetud/dashhomeetud.component';
import { RapportComponent } from './backoffice/etudiant/rapport/rapport.component';
import { DashJuryComponent } from './backoffice/jury/dash-jury/dash-jury.component';
import { DashconsulterComponent } from './backoffice/jury/dashconsulter/dashconsulter.component';
import { DashhomeComponent } from './backoffice/jury/dashhome/dashhome.component';
import { DashnoteComponent } from './backoffice/jury/dashnote/dashnote.component';
import { CreateComponent } from './frontoffice/create/create.component';
import { DefaultComponent } from './frontoffice/default/default.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { ManagementComponent } from './frontoffice/management/management.component';
import { TechnologyComponent } from './frontoffice/technology/technology.component';
import { TicmanagComponent } from './frontoffice/ticmanag/ticmanag.component';
import { DashadminComponent } from './backoffice/admin/dashadmin/dashadmin.component';
import { DashhomeAdminComponent } from './backoffice/admin/dashhome-admin/dashhome-admin.component';
import { ListerEtudiantComponent } from './backoffice/admin/lister-etudiant/lister-etudiant.component';
import { ListerJuryComponent } from './backoffice/admin/lister-jury/lister-jury.component';
import { ListerEntrepriseComponent } from './backoffice/admin/lister-entreprise/lister-entreprise.component';
import { AjoutEntrepriseComponent } from './backoffice/admin/ajout-entreprise/ajout-entreprise.component';
import { DepotAffectationComponent } from './backoffice/admin/depot-affectation/depot-affectation.component';
import { DetailEntrepriseComponent } from './backoffice/admin/detail-entreprise/detail-entreprise.component';
import { AjouterSoutenanceComponent } from './backoffice/admin/ajouter-soutenance/ajouter-soutenance.component';

const routes: Routes = [
  {path:'',title:'',component:DefaultComponent,children:[
    {path:'home',title:'Home',component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'departement',title:'Departement',component:TicmanagComponent},
    {path:'technologie',title:'technologie',component:TechnologyComponent},
    {path:'management',title:'Management',component:ManagementComponent},
  ]},
  {path:'login',title:'Login',component:LoginComponent},
  {path:'create',title:'Create',component:CreateComponent},
  
  {path:'dashjury',title:'Dash Admin',component:DashJuryComponent,children:[
    {path:'dashhome',title:'Dash jury',component:DashhomeComponent},
    {path:'dashconsulter',title:'Consulter',component:DashconsulterComponent},
    {path:'dashnote',title:'Affecter Note',component:DashnoteComponent},
    {path:'',redirectTo:'/dashjury/dashHome',pathMatch:'full'}

  ]},
  {path:'dashadmin',title:'dashadmin',component:DashadminComponent,children:[
    {path:'dashhomeAdmin',title:'Home Admin',component:DashhomeAdminComponent},
    {path:'listerEtudiant',title:'Lister Etudiant',component:ListerEtudiantComponent},
    {path:'listerJury',title:'Lister Jury',component:ListerJuryComponent},
    {path:'listerEntreprise',title:'Lister Entreprise',component:ListerEntrepriseComponent},
    {path:'depotAffectation',title:'Depot Lettre Affectation',component:DepotAffectationComponent},
    {path:'ajoutEntreprise',title:'Ajout Entreprise',component:AjoutEntrepriseComponent},
    {path:'detailsE',title:'Details Entreprise',component:DetailEntrepriseComponent},
    {path:'ajouterS',title:'Ajouter Soutenance',component:AjouterSoutenanceComponent},
    {path:'',redirectTo:'/dashadmin/dashhomeAdmin',pathMatch:'full'}

  ]},
  {path:'dashetudiant',title:'dashetudiant',component:DashetudiantComponent,children:[
    {path:'dashhomeetud',title:'Home Etudiant',component:DashhomeetudComponent},
    {path:'depot',title:'Depot',component:DashdepotComponent},
    {path:'consulteretud',title:'Consulter Etudiant',component:DashconsulteretudComponent},
    {path:'demande',title:'Demandede Stage',component:DashdemandeComponent},
    {path:'rapport',title:'Rapport',component:RapportComponent},
    {path:'attestation',title:'Attestation',component:AttestationComponent},
    {path:'',redirectTo:'/dashetudiant/dashhomeetud',pathMatch:'full'}

  ]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
