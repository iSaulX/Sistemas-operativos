import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/Homepage"));
const First = lazy(() => import("../pages/FirstHomework"));
const Second = lazy(() => import("../pages/SecondHomework"));
const Third = lazy(() => import("../pages/ThirdHomework"));
const Fourth = lazy(() => import("../pages/FourthHomework"));
const DescriptionFirst = lazy(() => import("../pages/DescriptionFirst"));
const DescriptionSecond = lazy(() => import("../pages/DescriptionSecond"));
const DescriptionThird = lazy(() => import("../pages/DescriptionThird"));



export default function AppRouter(): JSX.Element {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/workspace/first-homework" element={<First />} />
                    <Route path="/workspace/second-homework" element={<Second />} />
                    <Route path="/workspace/third-homework" element={<Third />} />
                    <Route path="/workspace/fourth-homework" element={<Fourth />} />
                    <Route path="/about/first" element={<DescriptionFirst />} />
                    <Route path="/about/second" element={<DescriptionSecond />} />
                    <Route path="/about/third" element={<DescriptionThird />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}