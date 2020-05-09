<template>
    <div class="container-fluid">
        <!-- <div class="row nav-brand">
            <div class="col-md-6">
                <img class="brand-logo" src="./../assets/fitness-icon.png" />
            </div>
            <div class="col-md-6">
                <div class="d-inline-block float-right">
                <a href="" class="d-inline-block pt-3 mr-3">Signin</a>
                <a class="d-inline-block btn btn-sm btn-signup">Signup</a>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-6 hero-img">
            </div>
            <div class="col-md-6 hero-signup-container">
                <div class="container signup-wrapper">
                    <img class="brand-logo" src="./../assets/fitness-icon.png" />
                    <form v-on:submit="signup($event)">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="usr">First Name</label>
                                <input type="text" class="form-control" id="usr" name="firstname" v-model="firstname">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="usr">Last Name</label>
                                <input type="text" class="form-control" id="usr" name="lastname" v-model="lastname">
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-left">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail" name="email" v-model="email">
                    </div>
                    <div class="form-group text-left">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" id="pwd" name="password" v-model="password">
                    </div>
                    <div class="form-group text-left">
                        <label for="cnfrm-pwd">Confirm Password</label>
                        <input type="password" class="form-control" id="pwd" name="confirmpassword" v-model="confirmpassword">
                    </div>
                    <button class="d-inline-block btn btn-sm btn-signup" value="Signup" type="submit">Signup</button>
                    </form>
                    <a class="d-block mt-5">Forgot password?</a>
                    <router-link :to="{path: 'signin'}" class="d-block">Already have account <u><b>Signin</b></u></router-link>
                    <a class="d-block footer-txt">2019 - 2020 All rights reserved.</a>
                </div>
            </div>
        </div>

    </div>
</template>