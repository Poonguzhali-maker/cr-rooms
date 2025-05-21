import { Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { ReportsComponent } from './reports/reports.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { UserComponent } from './user/user.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BasicDetailsComponent } from './add-property/basic-details/basic-details.component';
import { ManageMasterDataComponent } from './manage-master-data/manage-master-data.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManagePermissionComponent } from './manage-permission/manage-permission.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddUsersComponent } from './user/add-users/add-users.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ListSponsorsComponent } from './sponsors/list-sponsors/list-sponsors.component';
import { AddSponsorsComponent } from './sponsors/add-sponsors/add-sponsors.component';



export const routes: Routes = [
    { path: '', redirectTo: 'add-property', pathMatch: 'full' },
    { path: 'add-property', component: AddPropertyComponent,
        children:[{path:'basic-details',component:BasicDetailsComponent}] },

    { path: 'booking-details', component: BookingDetailsComponent },
    { path: 'list-property', component: ListPropertyComponent },
    { path: 'popular-places', component: PopularPlacesComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'sponsors', component: SponsorsComponent,
        children:[{path:'add-sponsors', component:AddSponsorsComponent},
            {path:'list-sponsors', component:ListSponsorsComponent}]
     },

    { path: 'add-property', component: AddPropertyComponent,
        children:[{path:'basic-details',component:BasicDetailsComponent}] },

    { path: 'user', component: UserComponent ,
        children:[{path:'add-users', component:AddUsersComponent},
            {path:'list-users', component:ListUsersComponent}]
     },

    { path: 'aboutus', component: AboutusComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'manage-permission', component: ManagePermissionComponent },
    { path: 'manage-roles', component: ManageRolesComponent },
    { path: 'manage-master-data', component: ManageMasterDataComponent },
    { path: 'log-out', component: LogOutComponent },

];
