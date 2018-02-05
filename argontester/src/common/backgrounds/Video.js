var ARGON = require('../')

class VideoBackground extends ARGON.Background {

  constructor(...args) {
    super(...args)
    if (ARGON.isChannel) {

    }
  }

  setVideoSize(size) {
    this.set('videoSize', size)
  }

  getVideoSize() {
    return this.state.videoSize
  }

}

VideoBackground.className = 'Background.Video'
ARGON.Background.Video = VideoBackground
