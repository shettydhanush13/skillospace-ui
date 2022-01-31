import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Duration from './Duration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faPlayCircle, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const Player = ({ lesson, lessonEnded }) => {

  const playerRef = useRef();

  const [url, setUrl] = useState(null)
  const [playing, setPlaying] = useState(true)
  const [light] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)

  const load = () => {
    setUrl(lesson.url)
    setPlayed(0)
  }

  const handlePlayPause = () => {
    setPlaying(el => !el)
  }

  const handleVolumeChange = e => {
    setVolume(parseFloat(e.target.value))
  }

  const handleToggleMuted = () => {
    setMuted(el => !el)
  }

  const handleSetPlaybackRate = e => {
    setPlaybackRate(parseFloat(e.target.value))
  }

  const handleOnPlaybackRateChange = (speed) => {
    setPlaybackRate(parseFloat(speed))
  }

  const handlePlay = () => {
    setPlaying(true)
  }

  const handlePause = () => {
    setPlaying(false)
  }

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleSeekMouseUp = e => {
    playerRef.current.seekTo(parseFloat(e.target.value))
  }

  const handleProgress = state => {
    const { played } = state;
      setPlayed(played)
  }

  const handleEnded = () => {
    lessonEnded()
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
    setDuration(duration)
  }

  const saveProgressForUser = () => {
    //save minutes based progress
  }

  useEffect(() => {
    load()
    return () => {
      saveProgressForUser()
    }
  }, [lesson])

    return (
      <div className='app'>
        <section className='section'>
          {<div className={`dummyLayer ${playing ? '' : 'active'}`} onClick={(e) => e.stopPropagation()}>
            {!playing &&  <FontAwesomeIcon icon={faPlayCircle}/>}
            </div>}
            <ReactPlayer
              ref={playerRef}
              className='react-player'
              width='60vw'
              height='60vh'
              url={url}
              playing={playing}
              light={light}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={handlePlay}
              onPause={handlePause}
              onBuffer={() => console.log('onBuffer')}
              onPlaybackRateChange={handleOnPlaybackRateChange}
              onSeek={e => console.log('onSeek', e)}
              onEnded={handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />

            <div className='media-controls'>
                <section>
                  <button onClick={handlePlayPause}><FontAwesomeIcon icon={playing ? faPause : faPlay}/></button>
                  {light && <button onClick={() => playerRef.current.showPreview()}>Show preview</button>}
                </section>
                <section className="duration-section">
                  <section className="time-section">
                    <Duration className='app-name' seconds={duration * (played)} />
                    &nbsp;<span className='app-name'>/</span>&nbsp;
                    <Duration className='app-name' seconds={duration} />
                  </section>
                  <section className='progressSection'>
                    <input
                      type='range' min={0} max={0.999999} step='any'
                      value={played}
                      onChange={handleSeekChange}
                      onMouseUp={handleSeekMouseUp}
                    />
                  </section>
                  <section className="time-section">
                    <Duration className='app-name' seconds={duration * (1-played)} />
                  </section>
                </section>
                <section className="volumne-section">
                  <button onClick={handleToggleMuted}><FontAwesomeIcon icon={muted ? faVolumeMute : faVolumeUp}/></button>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} />
                  <p className='app-name'>{parseInt(volume*100)}%</p>
                </section>
                <section>
                  <button className={playbackRate === 1 ? `activePlayback` : ''} onClick={handleSetPlaybackRate} value={1}>1x</button>
                  <button className={playbackRate === 1.5 ? `activePlayback` : ''} onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                  <button className={playbackRate === 2 ? `activePlayback` : ''} onClick={handleSetPlaybackRate} value={2}>2x</button>
                </section> 
            </div>
        </section>
      </div>
    )
}

export default Player
