export interface Stream {
    active: boolean;
    camera: {
        href: string;
        id: number;
    };
    configuration: Record<string, unknown>;
    href: string;
    id: number;
    name: string;
    recordWhenSecondary: boolean;
    recordingConfiguration: {
        bgseg: {
            boxArea: number;
            dilate: number;
            postErode: number;
            preErode: number;
            threshold: number;
            motionMask: {
                href: string;
            };
        };
        decode: {
            keyFramesOnly: boolean;
        };
        filesplit: {
            motionMode: string;
            recordState: boolean;
            timePeriod: number;
        };
        mode: string;
        motionReducer: boolean;
        metadata: {
            bgseg: {
                topic: string;
                data: {
                    name: string;
                    type: string;
                };
                enabled: string;
            };
        };
    };
    dewarpConfiguration: {
        enable: boolean;
        defaultMode: string;
        orientation: string;
        perspectiveDepth: number;
        defaultPerspectiveView: {
            pan: number;
            tilt: number;
            zoom: number;
        };
        panoramaAspectRatio: number;
        panoramaShift: number;
    };
}
