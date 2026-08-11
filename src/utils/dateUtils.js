function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });

  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
}

export function getNextTimelineItem(items) {
  const now = new Date();

  return items
    .filter((item) => new Date(item.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
}

export function formatTime(dateString) {
  if (!dateString) {
    return null;
  }

  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}