import { lazy, Suspense } from "react";
import "./global.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const SignupForm = lazy(() => import("./_auth/forms/SignupForm"));
const SigninForm = lazy(() => import("./_auth/forms/SigninForm"));
const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
const RootLayout = lazy(() => import("./_root/RootLayout"));
const Home = lazy(() => import("./_root/pages/Home"));
const Explore = lazy(() => import("./_root/pages/Explore"));
const Saved = lazy(() => import("./_root/pages/Saved"));
const AllUsers = lazy(() => import("./_root/pages/AllUsers"));
const CreatePost = lazy(() => import("./_root/pages/CreatePost"));
const EditPost = lazy(() => import("./_root/pages/EditPost"));
const PostDetails = lazy(() => import("./_root/pages/PostDetails"));
const Profile = lazy(() => import("./_root/pages/Profile"));
const UpdateProfile = lazy(() => import("./_root/pages/UpdateProfile"));
const LikedPosts = lazy(() => import("./_root/pages/LikedPosts"));

const App = () => {
  return (
    <main className="flex h-screen">
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          {/* Public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>

          {/* Private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="/all-users" element={<AllUsers/>} />
            <Route path="/create-post" element={<CreatePost/>}/>
            <Route path="/update-post/:id" element={<EditPost/>}/>
            <Route path="/posts/:id" element={<PostDetails/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
            <Route path="/liked-post/:id" element={<LikedPosts/>}/>
          </Route>
        </Routes>
      </Suspense>

      <Toaster />
    </main>
  );
};

export default App;
