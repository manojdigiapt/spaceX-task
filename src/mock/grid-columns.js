import {Link} from "react-router-dom"

export const capsulesGridColumns = [
    {
        title: 'Capsule serial',
        dataIndex: 'capsule_serial',
        key: 'capsule_serial',
        render: serial => <Link to={`/capsules/${serial}`}>{serial}</Link>
    },
    {
      title: 'Capsule id',
      dataIndex: 'capsule_id',
      key: 'capsule_id',
    },
    {
      title: 'Landings',
      dataIndex: 'landings',
      key: 'landings',
    },
    {
      title: 'Original launch',
     dataIndex: 'original_launch',
      key: 'original_launch',
    },
    {
      title: 'Unix',
      dataIndex: 'original_launch_unix',
      key: 'original_launch_unix',
    },
    {
      title: 'Reuse count',
      dataIndex: 'reuse_count',
      key: 'reuse_count',
    },
    {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
  },
]

export const coresGridColumns = [
{
  title: 'Core serial',
  dataIndex: 'core_serial',
  key: 'core_serial',
  render: serial => <Link to={`/cores/${serial}`}>{serial}</Link>
},
{
  title: 'Original launch',
 dataIndex: 'original_launch',
  key: 'original_launch',
},
{
  title: 'Unix',
  dataIndex: 'original_launch_unix',
  key: 'original_launch_unix',
},
{
  title: 'Reuse count',
  dataIndex: 'reuse_count',
  key: 'reuse_count',
},
{
  title: 'Details',
  dataIndex: 'details',
  key: 'details',
},
]

export const dragonsGridColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: serial => <Link to={`/dragons/${serial}`}>{serial}</Link>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Crew capacity',
    dataIndex: 'crew_capacity',
    key: 'crew_capacity',
  },
  {
    title: 'First flight',
    dataIndex: 'first_flight',
    key: 'first_flight',
  },
  ]

  export const historyGridColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: serial => <Link to={`/history/${serial}`}>{serial}</Link>
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Event date',
      dataIndex: 'event_date_utc',
      key: 'event_date_utc',
    },
    {
      title: 'UNIX',
      dataIndex: 'event_date_unix',
      key: 'event_date_unix',
    },
    {
      title: 'Flight number',
      dataIndex: 'flight_number',
      key: 'flight_number',
    },
    ]

    export const landingPadsGridColumns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: serial => <Link to={`/landpads/${serial}`}>{serial}</Link>
      },
      {
        title: 'Full name',
        dataIndex: 'full_name',
        key: 'full_name',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Landing type',
        dataIndex: 'landing_type',
        key: 'landing_type',
      },
      {
        title: 'Attempted landings',
        dataIndex: 'attempted_landings',
        key: 'attempted_landings',
      },
      {
        title: "Successful landings",
        dataIndex: "successful_landings",
        key: "successful_landings"
      }
      ]

      export const launchesGridColumns = [
        {
          title: 'Flight number',
          dataIndex: 'flight_number',
          key: 'flight_number',
          render: serial => <Link to={`/launches/${serial}`}>{serial}</Link>
        },
        {
          title: 'Mission name',
          dataIndex: 'mission_name',
          key: 'mission_name',
        },
        {
          title: 'Launching year',
          dataIndex: 'launch_year',
          key: 'launch_year',
        },
        {
          title: 'Launch date unix',
          dataIndex: 'launch_date_unix',
          key: 'launch_date_unix',
        },
        {
          title: 'Launch Date UTC',
          dataIndex: 'launch_date_utc',
          key: 'launch_date_utc',
        },
        {
          title: "Details",
          dataIndex: "details",
          key: "details"
        }
        ]
        export const launchPadsGridColumns = [
          {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: 'Attempted launches',
            dataIndex: 'attempted_launches',
            key: 'attempted_launches',
          },
          {
            title: 'Successful launches',
            dataIndex: 'successful_launches',
            key: 'successful_launches',
          },
          {
            title: "Site id",
            dataIndex: "site_id",
            key: "site_id",
            render: serial => <Link to={`/launchpads/${serial}`}>{serial}</Link>
          },
          {
            title: "Site name",
            dataIndex: "site_name_long",
            key: "site_name_long"
          }
          ]
export const missionsGridColumns = [
  {
    title: 'Mission name',
    dataIndex: 'mission_name',
    key: 'mission_name',
  },
  {
    title: 'Mission id',
    dataIndex: 'mission_id',
    key: 'mission_id',
    render: serial => <Link to={`/missions/${serial}`}>{serial}</Link>
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
    render: serial => <a href={serial}>{serial}</a>
  },
  {
    title: 'Twitter',
    dataIndex: 'twitter',
    key: 'twitter',
    render: serial => <a href={serial}>{serial}</a>
  },
  ]

  export const payloadsGridColumns = [
  {
    title: 'Payload id',
    dataIndex: 'payload_id',
    key: 'payload_id',
    render: serial => <Link to={`/payloads/${serial}`}>{serial}</Link>
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    key: 'nationality',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Payload type',
    dataIndex: 'payload_type',
    key: 'payload_type',
  },
  {
    title: 'Orbit',
    dataIndex: 'orbit',
    key: 'orbit',
  }
  ]

  export const rocketsGridColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Stages',
      dataIndex: 'stages',
      key: 'stages',
    },
    {
      title: 'Boosters',
      dataIndex: 'boosters',
      key: 'boosters',
    },
    {
      title: 'Cost per launch',
      dataIndex: 'cost_per_launch',
      key: 'cost_per_launch',
    },
    {
      title: 'Success rate',
      dataIndex: 'success_rate_pct',
      key: 'success_rate_pct',
    },
    {
      title: 'First flight',
      dataIndex: 'first_flight',
      key: 'first_flight',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Rocket id',
      dataIndex: 'rocket_id',
      key: 'rocket_id',
      render: serial => <Link to={`/rockets/${serial}`}>{serial}</Link>
    },
    {
      title: 'Rocket name',
      dataIndex: 'rocket_name',
      key: 'rocket_name',
    },
    {
      title: 'Rocket type',
      dataIndex: 'rocket_type',
      key: 'rocket_type',
    },
    ]

    export const shipsGridColumns = [
      {
        title: 'Ship id',
        dataIndex: 'ship_id',
        key: 'ship_id',
        render: serial => <Link to={`/ships/${serial}`}>{serial}</Link>
      },
      {
        title: 'Ship name',
        dataIndex: 'ship_name',
        key: 'ship_name',
      },
      {
        title: 'Ship type',
        dataIndex: 'ship_type',
        key: 'ship_type',
      },
      {
        title: 'Imo',
        dataIndex: 'imo',
        key: 'imo',
      },
      {
        title: 'Home port',
        dataIndex: 'home_port',
        key: 'home_port',
      },
      {
        title: 'MMSI',
        dataIndex: 'mmsi',
        key: 'mmsi',
      },
      {
        title: 'Abs',
        dataIndex: 'abs',
        key: 'abs',
      },
      {
        title: 'Class',
        dataIndex: 'class',
        key: 'class',
      },
      {
        title: 'Weight lbs',
        dataIndex: 'weight_lbs',
        key: 'weight_lbs',
      },
      {
        title: 'Weight kg',
        dataIndex: 'weight_kg',
        key: 'weight_kg',
      },
      ]