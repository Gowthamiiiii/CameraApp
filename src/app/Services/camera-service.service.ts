import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Camera } from '../Camera';

@Injectable({
  providedIn: 'root'
})
export class CameraServiceService {

  private cameras = {
    "cameras": [
      {
        "active": true,
        "camera": {
          "href": "https://th.bing.com/th/id/R.526c7cb29a382f5f86ab2f745efe22c2?rik=ghnZ7V9vcJ%2fGoQ&riu=http%3a%2f%2fwww.safeinc.com%2fimages%2fsurveillance-video-camera.jpg&ehk=xPJ%2b31DGUdrRQwuR5oNBy8OurZVlUaMlNh5aa%2b4lmcY%3d&risl=&pid=ImgRaw&r=0",
          "id": 1
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.526c7cb29a382f5f86ab2f745efe22c2?rik=ghnZ7V9vcJ%2fGoQ&riu=http%3a%2f%2fwww.safeinc.com%2fimages%2fsurveillance-video-camera.jpg&ehk=xPJ%2b31DGUdrRQwuR5oNBy8OurZVlUaMlNh5aa%2b4lmcY%3d&risl=&pid=ImgRaw&r=0",
        "id": 1,
        "name": "Camera 1",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/R.526c7cb29a382f5f86ab2f745efe22c2?rik=ghnZ7V9vcJ%2fGoQ&riu=http%3a%2f%2fwww.safeinc.com%2fimages%2fsurveillance-video-camera.jpg&ehk=xPJ%2b31DGUdrRQwuR5oNBy8OurZVlUaMlNh5aa%2b4lmcY%3d&risl=&pid=ImgRaw&r=0",
          "id": 2
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.526c7cb29a382f5f86ab2f745efe22c2?rik=ghnZ7V9vcJ%2fGoQ&riu=http%3a%2f%2fwww.safeinc.com%2fimages%2fsurveillance-video-camera.jpg&ehk=xPJ%2b31DGUdrRQwuR5oNBy8OurZVlUaMlNh5aa%2b4lmcY%3d&risl=&pid=ImgRaw&r=0",
        "id": 2,
        "name": "Camera 2",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/OIP.-eXYIcTsp33qcY-VXoCRrwHaDs?pid=ImgDet&rs=1",
          "id": 3
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/OIP.-eXYIcTsp33qcY-VXoCRrwHaDs?pid=ImgDet&rs=1",
        "id": 3,
        "name": "Camera 3",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
          "id": 4
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
        "id": 4,
        "name": "Camera 4",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
          "id": 5
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
        "id": 5,
        "name": "Camera 5",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
          "id": 6
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
        "id": 6,
        "name": "Camera 6",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      }, 
      {
        "active": false,
        "camera": {
          "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
          "id": 7
        },
        "configuration": {},
        "href": "https://th.bing.com/th/id/R.e511195121b50c4c63f62744e42e830a?rik=5c8hOaoLQqe7jw&pid=ImgRaw&r=0",
        "id": 7,
        "name": "Camera 7",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://g-club.co.il/wp-content/uploads/2021/02/8-300x261.jpg",
          "id": 8
        },
        "configuration": {},
        "href": "https://g-club.co.il/wp-content/uploads/2021/02/8-300x261.jpg",
        "id": 8,
        "name": "Camera 8",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://i5.walmartimages.com/asr/8f1a7f6d-c8e3-4cd5-8851-7bc2911c50d2.5237a8e9b5d306218f4064b3e6a4048c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
          "id": 9
        },
        "configuration": {},
        "href": "https://i5.walmartimages.com/asr/8f1a7f6d-c8e3-4cd5-8851-7bc2911c50d2.5237a8e9b5d306218f4064b3e6a4048c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        "id": 9,
        "name": "Camera 9",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      },
      {
        "active": false,
        "camera": {
          "href": "https://ae01.alicdn.com/kf/HTB1vb3IPVXXXXa_XFXXq6xXFXXXT/Original-HK-5MP-IP-Camera-2560X1920-Support-POE-and-SD-card-128G-Security-Camera-Survillance-Camera.jpg",
          "id": 10
        },
        "configuration": {},
        "href": "https://ae01.alicdn.com/kf/HTB1vb3IPVXXXXa_XFXXq6xXFXXXT/Original-HK-5MP-IP-Camera-2560X1920-Support-POE-and-SD-card-128G-Security-Camera-Survillance-Camera.jpg",
        "id": 10,
        "name": "Camera 10",
        "recordWhenSecondary": true,
        "recordingConfiguration": {
          "bgseg": {
            "boxArea": 0,
            "dilate": 0,
            "postErode": 0,
            "preErode": 0,
            "threshold": 0,
            "motionMask": {
              "href": "string"
            }
          },
          "decode": {
            "keyFramesOnly": true
          },
          "filesplit": {
            "motionMode": "0",
            "recordState": true,
            "timePeriod": 0
          },
          "mode": "ALL_FEATURES_MODE",
          "motionReducer": true,
          "metadata": {
            "bgseg": {
              "topic": "string",
              "data": {
                "name": "string",
                "type": "string"
              },
              "enabled": "string"
            }
          }
        },
        "dewarpConfiguration": {
          "enable": true,
          "defaultMode": "warped",
          "orientation": "ceiling",
          "perspectiveDepth": 0,
          "defaultPerspectiveView": {
            "pan": 0,
            "tilt": 0,
            "zoom": 0
          },
          "panoramaAspectRatio": 0,
          "panoramaShift": 0
        }
      }

    ]
  }


  constructor(private http: HttpClient) {
    console.log(this.cameras)
  }

  getCameras(): Observable<Camera[]> {
    return interval(5000).pipe(map(() => this.cameras.cameras));
  }
}

