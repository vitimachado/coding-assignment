import './styles.css';

interface Skeleton {
    id?: string
    rows?: number
}

export const SkeletonMovie = ({ id = '', rows = 1}: Skeleton) => {
  return (
        <>
            { Array.from({ length: rows }, (_, i) => <div key={`skeleton-${id}-${i}`} className="wrapper skeleton"/>).map(e => e) }
        </>
    )
}
