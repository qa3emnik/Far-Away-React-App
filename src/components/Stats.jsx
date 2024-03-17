import PropTypes from 'prop-types';

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your list🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! ready to go ✈️'
          : `💼You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)
`}
      </em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
