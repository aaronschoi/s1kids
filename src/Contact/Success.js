export default function Success({ success }) {
    return (
      success >= 1 && (
        <div className="">{success > 1 ? `${success} Messages Sent!` : `Message Sent!`}</div>
      )
    );
  }