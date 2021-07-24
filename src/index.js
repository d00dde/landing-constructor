import "@scss/reset.scss";
import { Builder } from "./core/Builder";
import { data as dataRus } from "./data/data-rus";
import { data as dataEng } from "./data/data-eng";
import { Navbar } from "./components/navbar/Navbar";
import { Experiment } from "./components/experiment/Experiment";

new Builder(dataEng, Navbar, Experiment);
