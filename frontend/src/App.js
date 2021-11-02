// import "./App.css";

import "./index.css";
import { Switch, Route } from "react-router-dom";
import ProduitPage from "./components/pages/ProduitPage";
import Acceuil from "./components/pages/Acceuil";
import Footer from "./components/Footer";
import PanierPage from "./components/pages/PanierPage";
import ConnectPage from "./components/pages/ConnectPage";
import RegisterPage from "./components/pages/RegisterPage";
import Navbar from "./components/Navbar";
import ShippingAddressPage from "./components/pages/ShippingAddressPage";
import Paiement from "./components/pages/Paiement";
import CommanderPage from "./components/pages/CommanderPage";
import CommandeView from "./components/pages/CommandeView";
import Peinture from "./components/nosartisans/Peinture";
import Tapisserie from "./components/nosartisans/Tapisserie";
import Cuivre from "./components/nosartisans/Cuivre";
import Fibre from "./components/nosartisans/Fibre";
import Mosaique from "./components/nosartisans/Mosaique";
import Verre from "./components/nosartisans/Verre";
import CommanderHistorique from "./components/pages/CommanderHistorique";
import AdminRoute from "./components/AdminRoute";
import ProduitListPage from "./components/pages/ProduitListPage";
import CommandeListPage from "./components/pages/CommandeListPage";
import ProduitModifierPage from "./components/pages/ProduitModifierPage";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import Event from "./components/Event";
import Events from "./components/Events";
import CreateEvent from "./components/CreateEvent";
import Carousel from "./components/Carousel";
import ClientListPage from "./components/pages/ClientListPage";
import ProfilePage from "./components/pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import ClientModiferPage from "./components/pages/ClientModiferPage";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
        <Switch>
          <Route path="/tappie" component={Tapisserie}></Route>
          <Route path="/cuivre" component={Cuivre}></Route>
          <Route path="/fibre" component={Fibre}></Route>
          <Route path="/mosaique" component={Mosaique}></Route>
          <Route path="/verre" component={Verre}></Route>
          <Route path="/peinture" component={Peinture}></Route>
          <Route path="/panier/:id?" component={PanierPage}></Route>
          <Route exact path="/produit/:id" component={ProduitPage}></Route>
          <Route
            exact
            path="/produit/:id/modifier"
            component={ProduitModifierPage}
          ></Route>
          <Route path="/connecter" component={ConnectPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/paiement" component={Paiement}></Route>
          <Route exact path="/commander/:id" component={CommandeView}></Route>
          <Route
            exact
            path="/commanderhistorique"
            component={CommanderHistorique}
          ></Route>
          <Route path="/commander" component={CommanderPage}></Route>
          <AdminRoute
            path="/produitlist"
            component={ProduitListPage}
          ></AdminRoute>
          <AdminRoute
            path="/commanderlist"
            component={CommandeListPage}
          ></AdminRoute>
          <AdminRoute
            path="/clientlist"
            component={ClientListPage}
          ></AdminRoute>
          <AdminRoute
            path="/client/:id/modifier"
            component={ClientModiferPage}
          ></AdminRoute>
          <Route path="/blogs" component={Blogs}></Route>
          <Route path="/blog/:id" component={Blog}></Route>
          <Route path="/createblog" component={CreateBlog}></Route>
          <Route path="/update-blog/:id" component={CreateBlog}></Route>
          <Route path="/events" component={Events}></Route>
          <Route path="/event/:id" component={Event}></Route>
          <Route path="/createevenement" component={CreateEvent}></Route>
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Route exact path="/" component={Acceuil}></Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
