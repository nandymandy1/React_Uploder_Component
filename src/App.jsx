import React from 'react';
import { SingleUploader, MultiUploader, Dropzone } from './components/Uploaders/Uploaders';

const App = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="card-header">
                  <h3 className="text-primary">
                    Upload Your Files Here
                  </h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <SingleUploader
                        uploadUrl="images/single-upload"
                        label="Single File Upload"
                        id="single-uploder"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <MultiUploader
                        uploadUrl="images/multi-upload"
                        label="Upload Multiple Images"
                        id="multi-uploader"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pr-2">
                      <Dropzone
                        uploadUrl="images/single-upload"
                        label="Dropzone"
                        id="dropzone-uploader"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
