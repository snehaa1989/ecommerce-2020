import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./core/Home";
import "./core/Menu";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminRoute from "./auth/helper/AdminRoutes";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";
import OurProducts from "./core/OurProducts";
import PasswordReset from "./user/PasswordReset";
import EmailReset from "./user/EmailReset";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ourproducts" component={OurProducts} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/cart" component={Cart} />

        
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <PrivateRoute
          exact
          path="/user/password-reset"
          component={PasswordReset}
        />
        <PrivateRoute
          exact
          path="/user/email-reset"
          component={EmailReset}
        />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute
          exact
          path="/admin/create/category"
          component={AddCategory}
        />
        <AdminRoute
          exact
          path="/admin/categories"
          component={ManageCategories}
        />
        <AdminRoute
          exact
          path="/category/:categoryId/:userId"
          component={UpdateCategory}
        />
        <AdminRoute exact path="/admin/create/product" component={AddProduct} />
        <AdminRoute exact path="/admin/products" component={ManageProduct} />
        <AdminRoute
          exact
          path="/admin/product/update/:productId"
          component={UpdateProduct}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
