import './App.css';
import {FilteringMovies} from "./components/FilterMovie/FilteringMovies";
import {TableComponent} from "./components/Table/Table";
import {GridComponent} from "./components/Table/GridComponent";
import UploadGalleryImages, {
  AllFiles
} from "./components/upload/UploadGalleryImages";

function App() {

  return (
    <div>
    <AllFiles />
    </div>
  );
}

export default App;
