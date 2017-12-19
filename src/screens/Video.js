import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import config from '../../config';
import YouTube from 'react-native-youtube';
import Orientation from 'react-native-orientation';

class VideoScreen extends Component {
  state = {
    isPlaying: true,
    isLooping: false,
    fullscreen: true,
  };

  goBack() {
    this.props.navigation.goBack();
  }

  componentWillMount() {
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  videoError(e) {}

  videoState(e) {
    if (e.state == 'ended') {
      this.goBack();
    }
  }

  changeFullScreen(e) {
    if (!e.isFullscreen) {
      this.goBack();
    }
  }

  videoProgress(e) {}

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.backgroundVideo}>
        <YouTube
          ref={component => {
            this._youTubeRef = component;
          }}
          apiKey={config.YTKey}
          videoId={params.videoID}
          // Variables
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={1}
          showinfo={false}
          modestbranding={true}
          rel={false}
          showFullscreenButton={false}
          // Methods
          onChangeFullscreen = {(e) => { this.changeFullScreen(e) }}
          onError={(e) => { this.videoError(e.error) }}
          onChangeState={(e) => { this.videoState({ e: e, state: e.state }) }}
          onReady={(e) => { this.videoState({ e: e, state: 'ready' }) }}
          onProgress={(e) => { this.videoProgress({ e: e, currentTime: e.currentTime, duration: e.duration }) }}
          onChangeQuality={(e) => { this.videoState({ e: e, quality: e.quality }) }}
        />
      </View>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default VideoScreen;
