# Prometheus Overview

Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. Since its inception in 2012, Prometheus has become a standalone open-source project and maintained independently by the Prometheus community.



---

## Getting Started with Prometheus

### Running Prometheus in Docker

To run Prometheus in a Docker container, you can use either of the following methods:

### 1. Docker Run Command

```bash
docker run -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

---
```bash 
docker-compose up


## Key Characteristics

1. **Single Machine Operation**:
   - Prometheus is designed to run on a single machine.
   - It is not distributed in nature, meaning it cannot be horizontally scaled across multiple machines.
   - Prometheus operates on a single load process.

---

## Main Features

Prometheus offers robust monitoring and alerting features, including:

- **Multi-Dimensional Data Model**:
  - Time series data is identified by metric name and key-value pairs.

- **PromQL**:
  - A flexible query language designed to leverage the multi-dimensional data model.

- **Autonomous Nodes**:
  - Prometheus servers do not rely on distributed storage; each server node operates independently.

- **Pull-Based Data Collection**:
  - Time series collection is performed via a pull model over HTTP.

- **Push Support**:
  - Time series data can also be pushed using an intermediary gateway.

- **Service Discovery**:
  - Targets are discovered dynamically using service discovery or static configuration.

- **Graphing and Dashboarding**:
  - Prometheus supports multiple modes for graphing and creating dashboards.

---

## Types of Metrics in Prometheus

### Counter
A counter is a cumulative metric that only increases. It is typically used to count events or conditions over time.

- **Example**: Counting the number of HTTP requests.

### Gauge
A gauge is a metric that can go up and down. It is often used to measure values that fluctuate.

- **Example**: Measuring the current memory usage or the current number of active users.

### Histogram
A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.

- **Example**: Measuring the duration of HTTP requests.

---

## Limitations

- **No Horizontal Scaling**:
  - Prometheus cannot run on multiple machines simultaneously for a single data load process.

---

## Resources

For more information, visit the [official Prometheus documentation](https://prometheus.io/docs/introduction/overview/).





