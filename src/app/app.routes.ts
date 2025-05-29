import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './features/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProductComponent } from './pages/our-product/our-product.component';
import { GiveComponent } from './pages/give/give.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'login' },
      { path: 'signup', component: SignUpComponent, title: 'signup' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'home' },
      { path: 'ourProduct', component: OurProductComponent , title: 'ourProduct' },
      { path: 'give', component: GiveComponent, title: 'give&get' },
      { path: 'about', component: AboutComponent, title: 'about' },
      { path: 'workshops', component: ContactComponent, title: 'contact' },
      { path: 'cart', component: CartComponent, title: 'cart' },
      { path: 'fav', component: FavouriteComponent, title: 'favourite' },
      { path: 'chat', component: ChatbotComponent, title: 'chatBot' },
    ],
  }
];
