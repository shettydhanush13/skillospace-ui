import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Duration from './Duration'

import './styles.scss'

const Player = ({ lesson }) => {

  const playerRef = useRef();

  const [url, setUrl] = useState(null)
  const [pip, setPip] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [controls, setControls] = useState(false)
  const [light, setLight] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [loaded, setLoaded] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] = useState(false)
  const [seeking, setSeeking] = useState(true);

  const load = () => {
    setUrl(lesson.url)
    setPlayed(0)
    setLoaded(0)
    setPip(false)
  }

  const handlePlayPause = () => {
    setPlaying(el => !el)
  }

  const handleStop = () => {
    setUrl(null)
    setPlaying(false)
  }

  const handleToggleControls = () => {
    setControls(el => !el)
    setUrl(url)
  }

  const handleToggleLight = () => {
    setLight(el => !el)
  }

  const handleToggleLoop = () => {
    setLoop(el => !el)
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

  const handleTogglePIP = () => {
    setPip(el => !el)
  }

  const handlePlay = () => {
    setPlaying(true)
  }

  const handleEnablePIP = () => {
    setPip(true)
  }

  const handleDisablePIP = () => {
    setPip(false)
  }

  const handlePause = () => {
    setPlaying(false)
  }

  const handleSeekMouseDown = e => {
    setSeeking(true)
  }

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }


  const handleSeekMouseUp = e => {
    setSeeking(false)
    playerRef.current.seekTo(parseFloat(e.target.value))
  }

  const handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!seeking) {
      // setState(state)
    }
  }

  const handleEnded = () => {
    console.log('onEnded')
    setPlaying(loop)
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
    setDuration(duration)
  }

  useEffect(() => {
    load()
  }, [lesson])

    return (
      <div className='app'>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={playerRef}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={handlePlay}
              onEnablePIP={handleEnablePIP}
              onDisablePIP={handleDisablePIP}
              onPause={handlePause}
              onBuffer={() => console.log('onBuffer')}
              onPlaybackRateChange={handleOnPlaybackRateChange}
              onSeek={e => console.log('onSeek', e)}
              onEnded={handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={handleStop}>Stop</button>
                  <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                  {/* <button onClick={handleClickFullscreen}>Fullscreen</button> */}
                  {light &&
                    <button onClick={() => playerRef.current.showPreview()}>Show preview</button>}
                  {ReactPlayer.canEnablePIP(url) &&
                    <button onClick={handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <button onClick={handleSetPlaybackRate} value={1}>1x</button>
                  <button onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                  <button onClick={handleSetPlaybackRate} value={2}>2x</button>
                </td>
              </tr>
              <tr>
                <th>Seek</th>
                <td>
                  <input
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                  />
                  <br/>
                  <Duration seconds={duration} />
                  <br/>
                  <Duration seconds={duration * played} />
                  <br/>
                  <Duration seconds={duration * (1-played)} />
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} />
                  {volume.toFixed(3)}
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='controls'>Controls</label>
                </th>
                <td>
                  <input id='controls' type='checkbox' checked={controls} onChange={handleToggleControls} />
                  <em>&nbsp; Requires player reload</em>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='muted'>Muted</label>
                </th>
                <td>
                  <input id='muted' type='checkbox' checked={muted} onChange={handleToggleMuted} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='loop'>Loop</label>
                </th>
                <td>
                  <input id='loop' type='checkbox' checked={loop} onChange={handleToggleLoop} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='light'>Light mode</label>
                </th>
                <td>
                  <input id='light' type='checkbox' checked={light} onChange={handleToggleLight} />
                </td>
              </tr>
              <tr>
                <th>Played</th>
                <td><progress max={1} value={played} />{played.toFixed(3)}</td>
              </tr>
              <tr>
                <th>Loaded</th>
                <td><progress max={1} value={loaded} />{loaded.toFixed(3)}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
}

export default Player
