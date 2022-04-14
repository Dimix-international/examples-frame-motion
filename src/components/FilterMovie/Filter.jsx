
export const Filer = ({callback, typeMovie}) => {
    return (
        <div className={'filer-container'}>
            <button className={typeMovie === 'all' ? 'active' : ''} onClick={() => callback('all')}>All</button>
            <button className={typeMovie === 'movie' ? 'active' : ''} onClick={() => callback('movie')}>Movies</button>
            <button className={typeMovie === 'series' ? 'active' : ''} onClick={() => callback('series')}>Series</button>
        </div>
    )
}