export default function Success({ success }) {
    return (
      success >= 1 && (
        <div className="error">{success > 1 ? `${success} Messages Sent!` : `Message Sent!`}</div>
      )
    );
  }