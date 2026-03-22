import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  body: string;
}

export const Timeline = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data.slice(0, 10)); // Take first 10
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setLoading(false);
      });
  }, []);

  const getTimelineIcon = (index: number) => {
    const mod = index % 5;
    if (mod === 0) return { type: 'icon', shape: 'success-standard', label: 'Completed' };
    if (mod === 1) return { type: 'icon', shape: 'error-standard', label: 'Error' };
    if (mod === 2) return { type: 'spinner', label: 'In Progress' };
    if (mod === 3) return { type: 'icon', shape: 'dot-circle', label: 'Current' };
    return { type: 'icon', shape: 'circle', label: 'Not started' };
  };

  return (
    <>
      <h2 cds-text="section">Comments Timeline (API Data)</h2>
      {loading ? (
        <div className="spinner spinner-md">Loading timeline...</div>
      ) : (
        <ul className="clr-timeline clr-timeline-vertical">
          {comments.map((comment, index) => {
            const icon = getTimelineIcon(index);
            return (
              <li className="clr-timeline-step" key={comment.id}>
                <div className="clr-timeline-step-header">{10 + index}:00 am</div>
                {icon.type === 'spinner' ? (
                  <div className="spinner spinner-md" aria-label={icon.label}></div>
                ) : (
                  <cds-icon role="img" shape={icon.shape} aria-label={icon.label}></cds-icon>
                )}
                <div className="clr-timeline-step-body">
                  <span className="clr-timeline-step-title">{comment.name}</span>
                  <span className="clr-timeline-step-description">{comment.body}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
