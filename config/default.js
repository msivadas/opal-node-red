/**
 *  Copyright Telligro Pte Ltd 2017
 *
 *  This file is part of OPAL.
 *
 *  OPAL is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  OPAL is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with OPAL.  If not, see <http://www.gnu.org/licenses/>.
 */

var defer = require('config/defer').deferConfig;
var appRoot = require('app-root-path');
var winston = require('winston');


module.exports = {

  // Set the 'type' of this instance
  //instance-type: 'worker',  // 'admin' for admin node and 'worker' for worker nodes



  // Opal logger settings
  logger: {
    winston: {

      file:{
        level: 'info',
        handleExceptions: true,
        exitOnError: false,
        json:false
      },
      console: {
        level: 'info',
        handleExceptions: true,
        exitOnError: false,
        json: false,
        colorize: true,

      },
      logstash: {
        level: 'info',
        handleExceptions: true,
        exitOnError: false,
        json: true,

      }

    },
    transportOpts: {
      file: {
        filename: `${appRoot}/logs/opal.log`,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
      },
      console: {


      },
      logstash: {
        // transport Settings:

          name: "TEST logstash",
          //localhost:
          host: "127.0.0.1",
          port: 5044,
          //node_name:
          //pid:
          //  max_connect_retries:
          //  timeout_connect_retries:
          //  retries:
          //  logstash:

          //ssl_enable:
          //ssl_key:
          //ssl_cert:
          //ca:
          //ssl_passphrase:
          //rejectUnauthorized:

          //log_queue:
          //connected:
          //socket:
          //strip_colors:
          //label:
          //meta_defaults:
          //transform:

      }
    },
    systemLogger: {
      options: {
        level: 'info',
        levels: winston.config.npm.levels,
        handleExceptions: true,
        exitOnError: false
      },

      transports: {
        logstash: {
          name: "TEST logstash",
          //localhost:
          host: "127.0.0.1",
          port: 8001,
        },
        file: {
          json: true,
          filename: `${appRoot}/logs/opalSys.log`,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
          colorize: false,
        }
      },
    },
    flowLogger: {
      options:{
        level: 'info',
        levels: winston.config.npm.levels,
        handleExceptions: true,
        exitOnError: false
      },

      transports: {
        logstash: {
          name: "Opal",
          //localhost:
          host: "127.0.0.1",
          port: 8001,
        },
        file: {
          json: true,
          filename: `${appRoot}/logs/opalFlow.log`,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
          colorize: false,
        }
      }
    },
    diagnosticsLogger: {
      options: {
        level: 'info',
        levels: winston.config.npm.levels,
        handleExceptions: true,
        exitOnError: false
      },

      transports: {
        logstash: {
          name: "Opal",
          //localhost:
          host: "127.0.0.1",
          port: 8001,
        },
        file: {
          json: true,
          filename: `${appRoot}/logs/opalDiag.log`,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
          colorize: false,
        }
      },
    }
  }
}
